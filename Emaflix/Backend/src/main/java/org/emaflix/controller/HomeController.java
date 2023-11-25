package org.emaflix.controller;

import com.sun.net.httpserver.HttpServer;
import org.emaflix.handlers.HomeEndpointHandler;
import org.emaflix.view.Content;

import java.util.Collection;

public class HomeController extends EmaflixController {

    private final DataController dataController;

    public HomeController(HttpServer httpServer, DataController dataController){
        super(httpServer);
        this.dataController = dataController;
    }

    @Override
    public void register() {
        this.httpServer.createContext("/home", new HomeEndpointHandler(this));
    }

    public Collection<Content> getRawMovies(){
        return this.dataController.getAllContent();
    }

}