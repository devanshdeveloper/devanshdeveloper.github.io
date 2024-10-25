import Script from "next/script";

function PdfViewer() {
  return (
    <>
      <Script
        src="https://cloudpdf.io/viewer.min.js"
        type="text/javascript"
        onLoad={() => {
          const config = {
            documentId: "c772d637-f8ca-4895-99dc-c12d2e535428",
            darkMode: true,
          };
          (window as any)
            .CloudPDF(config, document.getElementById("viewer"))
            .then((instance: any) => {});
        }}
      />
      <div id="viewer" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default PdfViewer;
