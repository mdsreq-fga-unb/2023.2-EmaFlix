package org.emaflix.controller;

import com.sun.net.httpserver.HttpServer;

public abstract class EmaflixController {

    protected final HttpServer httpServer;

    protected EmaflixController(HttpServer httpServer) {
        this.httpServer = httpServer;
    }

    public abstract void register();
}