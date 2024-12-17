import "./App.css";

import Card from "./components/Card";

function App() {
  const cardData = [
    {
      id: crypto.randomUUID(),
      title: "Güneş Enerjisi",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya koyuyor.<br/><br/>PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya koyuyor.`,
      variant: "big",
    },
    {
      id: crypto.randomUUID(),
      title: "Rüzgar Enerjisi",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Jeotermal Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Rüzgar Enerjisi",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Nükleer Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Jeotermal Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Rüzgar Enerjisi",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Jeotermal Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: crypto.randomUUID(),
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
  ];

  return (
    <>
      <h1 className="page-header">Sektörel Raporlar</h1>
      <div>
        {cardData
          .filter((item) => item.variant === "big")
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              variant={item.variant}
              content={item.content}
            />
          ))}
      </div>

      <div className="grid-container">
        {cardData
          .filter((item) => item.variant === "small")
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              variant={item.variant}
              content={item.content}
            />
          ))}
      </div>

      <a href="" className="show-link">
        <button disabled className="show-button">
          Daha Fazla Göster
        </button>
      </a>
    </>
  );
}

export default App;
