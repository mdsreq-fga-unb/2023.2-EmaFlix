package org.emaflix.handlers;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import org.emaflix.controller.VideoController;
import org.emaflix.service.FileService;
import java.io.File;
import java.io.IOException;

public class VideoEndpointHandler implements HttpHandler {

    private final VideoController videoController;
    private final FileService fileService = new FileService();

    public VideoEndpointHandler(VideoController videoController) {
        this.videoController = videoController;
    }

    @Override
    public void handle(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "windowurl");
        String contentId = exchange.getRequestURI().getFragment();
        String range = exchange.getRequestHeaders().getFirst("Range");
        File contentFile = this.videoController.processContentRequest(contentId, range);
        if(contentFile == null){
            sendContentNotFound(exchange);
            return;
        }
        long fileLength = contentFile.length();
        long start = Long.parseLong(range.replace("bytes=", "").split("-")[0]);
        int partialSplit = (int) (fileLength/5);
        int currentSlot = (int) (start/partialSplit);
        int endAt = (partialSplit* (currentSlot + 1));
        try {
            this.fileService.serveFile(exchange, contentFile, start, endAt, fileLength);
        } catch (IOException e) {
            sendContentNotFound(exchange);
        }
    }

    private void sendContentNotFound(HttpExchange exchange){
        try {
            exchange.sendResponseHeaders(404,0);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}