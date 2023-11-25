package org.emaflix.handlers;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import org.emaflix.controller.HomeController;
import org.emaflix.view.Content;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Collection;

public class HomeEndpointHandler implements HttpHandler {

    protected final HomeController videoController;
    private final Gson gson = new Gson();

    public HomeEndpointHandler(HomeController videoController) {
        this.videoController = videoController;
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        Collection<Content> contents = this.videoController.getRawMovies();
        String json = gson.toJson(contents);
        byte[] data = json.getBytes(StandardCharsets.UTF_8);
        exchange.sendResponseHeaders(204, data.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(data);
        }
    }

}