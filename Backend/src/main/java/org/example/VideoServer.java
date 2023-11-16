package org.example;

import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class VideoServer {

    public static void main(String[] args) throws Exception {
        ExecutorService workingService = Executors.newWorkStealingPool(16);
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/video", new VideoHandler());
        server.setExecutor(workingService); // creates a default executor
        server.start();
        System.out.println("Server started on port 8000");
    }

}