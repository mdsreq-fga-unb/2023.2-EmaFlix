package org.emaflix.controller;

import com.sun.net.httpserver.HttpServer;
import org.emaflix.handlers.VideoEndpointHandler;

import java.io.File;

public class VideoController extends EmaflixController {

    private final DataController contentController;

    public VideoController(DataController contentController, HttpServer httpServer){
        super(httpServer);
        this.contentController = contentController;
    }

    @Override
    public void register(){
        this.httpServer.createContext("/video", new VideoEndpointHandler(this));
    }

    public File processContentRequest(String contentId, String range){
        if(!this.contentController.isContentAvailable(contentId)){
            return null;
        }
        if (range == null){
            return null;
        }
        String filePath = this.contentController.getContentPath(contentId);
        return new File(filePath);
    }

}