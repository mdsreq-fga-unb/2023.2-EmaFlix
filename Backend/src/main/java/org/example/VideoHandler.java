package org.example;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

public class VideoHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        String filePath = "C:/Users/pagan/EmaFlix/Backend/src/main/resources/examples.mp4";
        File file = new File(filePath);
        System.out.println(file);
        String range = exchange.getRequestHeaders().getFirst("Range");
        long fileLength = file.length();
        System.out.println(fileLength + " file length.");
        System.out.println("range: " + range);
        if (range == null) {
            // Serve the entire file if no range is specified
            serveFile(exchange, file, 0, fileLength - 1, fileLength);
        } else {
            // Parse the range request
            long start = Long.parseLong(range.replace("bytes=", "").split("-")[0]);
            long end = fileLength - 1;
            int partialSplit = (int) (fileLength/5);
            int currentSlot = (int) (start/partialSplit);
            System.out.println(currentSlot);
            int endAt = (partialSplit* (currentSlot + 1));
            if(endAt > fileLength - 1){
                endAt = (int) (fileLength - 1);
            }
            serveFile(exchange, file, start, end, fileLength);
            System.out.println(end + " " + start );
        }
    }

    private void serveFile(HttpExchange exchange, File file, long start, long end, long fileLength) throws IOException {
        // Set response headers
        exchange.getResponseHeaders().add("Content-Type", "video/mp4");
        exchange.getResponseHeaders().add("Content-Length", String.valueOf(end - start + 1));
        exchange.getResponseHeaders().add("Content-Range", "bytes " + start + "-" + end + "/" + fileLength);
        exchange.getResponseHeaders().add("Accept-Ranges", "bytes");

        // Send the response code
        exchange.sendResponseHeaders(206, end - start + 1);

        try (OutputStream os = exchange.getResponseBody(); FileInputStream fis = new FileInputStream(file)) {
            // Skip to the start position
            fis.skip(start);

            byte[] buffer = new byte[8192];
            long totalBytesRead = 0;
            int bytesRead;

            while ((bytesRead = fis.read(buffer)) != -1 && totalBytesRead < (end - start + 1)) {
                os.write(buffer, 0, bytesRead);
                totalBytesRead += bytesRead;
            }
        }
    }

}