package com.gene.app;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Gene: contenedor WebView que sirve la página y los audios desde los assets del APK,
 * con soporte de Range para que el audio se pueda posicionar.
 */
public class MainActivity extends Activity {
    private static final String HOST = "appassets.gene";
    private static final String START = "https://" + HOST + "/gene/index.html";
    private WebView web;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        Window w = getWindow();
        w.setStatusBarColor(Color.parseColor("#1D1830"));
        w.setNavigationBarColor(Color.parseColor("#1D1830"));
        w.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#E7E4EE"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setBuiltInZoomControls(false);
        s.setSupportZoom(false);
        s.setTextZoom(100);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest r) {
                if (!HOST.equals(r.getUrl().getHost())) return null;
                return serve(r);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView v, String url) {
                return !HOST.equals(android.net.Uri.parse(url).getHost());
            }
        });
        setContentView(web);
        if (b != null) web.restoreState(b); else web.loadUrl(START);
    }

    private WebResourceResponse serve(WebResourceRequest r) {
        String path = r.getUrl().getPath();
        if (path == null) return null;
        if (path.startsWith("/")) path = path.substring(1);
        byte[] data;
        try {
            InputStream in = getAssets().open(path);
            ByteArrayOutputStream o = new ByteArrayOutputStream(Math.max(1024, in.available()));
            byte[] buf = new byte[32768];
            int n;
            while ((n = in.read(buf)) > 0) o.write(buf, 0, n);
            in.close();
            data = o.toByteArray();
        } catch (Exception e) {
            return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<String, String>(), new ByteArrayInputStream(new byte[0]));
        }
        String mime = mime(path);
        String enc = mime.startsWith("text/") ? "utf-8" : null;
        Map<String, String> h = new HashMap<String, String>();
        h.put("Accept-Ranges", "bytes");
        h.put("Cache-Control", "max-age=3600");
        String range = r.getRequestHeaders() == null ? null : r.getRequestHeaders().get("Range");
        if (range != null && range.startsWith("bytes=")) {
            try {
                String[] p = range.substring(6).split("-", 2);
                int len = data.length;
                int from, to;
                if (p[0].length() == 0) { from = Math.max(0, len - Integer.parseInt(p[1])); to = len - 1; }
                else { from = Integer.parseInt(p[0]); to = (p.length > 1 && p[1].length() > 0) ? Integer.parseInt(p[1]) : len - 1; }
                if (to >= len) to = len - 1;
                if (from <= to) {
                    byte[] part = new byte[to - from + 1];
                    System.arraycopy(data, from, part, 0, part.length);
                    h.put("Content-Range", "bytes " + from + "-" + to + "/" + len);
                    h.put("Content-Length", String.valueOf(part.length));
                    return new WebResourceResponse(mime, enc, 206, "Partial Content", h, new ByteArrayInputStream(part));
                }
            } catch (Exception ignored) { }
        }
        h.put("Content-Length", String.valueOf(data.length));
        return new WebResourceResponse(mime, enc, 200, "OK", h, new ByteArrayInputStream(data));
    }

    private static String mime(String p) {
        p = p.toLowerCase();
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".js")) return "application/javascript";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".mp3")) return "audio/mpeg";
        if (p.endsWith(".woff2")) return "font/woff2";
        if (p.endsWith(".woff")) return "font/woff";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".svg")) return "image/svg+xml";
        return "application/octet-stream";
    }

    @Override
    protected void onSaveInstanceState(Bundle o) {
        super.onSaveInstanceState(o);
        web.saveState(o);
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onDestroy() {
        web.destroy();
        super.onDestroy();
    }

    @Override
    public boolean onKeyDown(int code, KeyEvent e) {
        if (code == KeyEvent.KEYCODE_BACK && web.canGoBack()) { web.goBack(); return true; }
        return super.onKeyDown(code, e);
    }
}
