package org.emaflix;

import com.sun.net.httpserver.HttpServer;
import org.emaflix.controller.DataController;
import org.emaflix.controller.VideoController;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Emaflix {

    public static void main(String[] args) {
        ExecutorService workingService = Executors.newWorkStealingPool(16);
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
            server.setExecutor(workingService); // creates a default executor
            initControllers(server);
            server.start();
            System.out.println("Emaflix HTTP Server has started on port 8000");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private static void initControllers(HttpServer httpServer) {
        DataController dataController = new DataController(httpServer);
        VideoController videoController = new VideoController(dataController, httpServer);
        dataController.register();
        videoController.register();
    }

}