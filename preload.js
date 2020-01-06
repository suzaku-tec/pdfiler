const PDFJS = require("pdfjs-dist");

PDFJS.GlobalWorkerOptions.workerSrc =
  "node_modules/pdfjs-dist/build/pdf.worker.js";

PDFJS.getDocument("test.pdf").then(function(pdf) {
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var rotate = 0;
    var viewport = page.getViewport(scale, rotate);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    document.getElementById("pdf-container").appendChild(canvas);

    page.render(renderContext);
  });
});
