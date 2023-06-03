import download from "../../assets/download.png";
import { ButtonPdf } from "../../pages/Dashboard/style";

export function DownloadButton() {
  const handleDownload = async () => {
    const apiUrl = "http://localhost:3000/report";
    const token = localStorage.getItem("your-personal-schedule:token");

    if (!token) {
      console.error("Usuário não autenticado.");
      return;
    }

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "documento.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Erro ao baixar o PDF:", error);
      });
  };

  return (
    <ButtonPdf onClick={handleDownload}>
      <img src={download} alt="" />
    </ButtonPdf>
  );
}
