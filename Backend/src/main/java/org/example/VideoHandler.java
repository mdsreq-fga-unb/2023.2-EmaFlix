package org.example;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

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
        byte[] seekContent = partialSeek(file, start, end + 1);
        if(seekContent != null){
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(seekContent);
            }
        }
    }

    private byte[] partialSeek(File file, long start, long finish) {
        int length = (int) (finish - start);
        try (RandomAccessFile randomAccessFile = new RandomAccessFile(file, "r")) {
            randomAccessFile.seek(start);
            byte[] buffer = new byte[length];
            randomAccessFile.read(buffer, 0, length);
            return buffer;
        } catch (Exception exception) {
            exception.fillInStackTrace();
            return null;
        }
    }

}