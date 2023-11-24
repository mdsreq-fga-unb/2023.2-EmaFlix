package org.emaflix.controller;

import com.sun.net.httpserver.HttpServer;

public class DataController extends EmaflixController{

    public DataController(HttpServer httpServer) {
        super(httpServer);
    }

    public boolean isContentAvailable(String contentID){
        return false; // TODO: caching layer with database here.
    }

    public String getContentPath(String contentId){
        return null; // TODO: Caching layer here as well.
    }

    @Override
    public void register() {

    }

}