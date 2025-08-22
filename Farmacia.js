const medicamentos = [
  { nombre: "IBUPROFENO", tiendaA: 5.20, tiendaB: 5.00, tiendaC: 5.50, disponible: true },
  { nombre: "PARACETAMOL", tiendaA: 3.10, tiendaB: 3.00, tiendaC: 3.20, disponible: true },
  { nombre: "AMOXICILINA", tiendaA: 10.00, tiendaB: 9.80, tiendaC: 10.50, disponible: false },
  { nombre: "METFORMINA", tiendaA: 7.50, tiendaB: 7.40, tiendaC: 7.60, disponible: true },
  { nombre: "OMEPRAZOL", tiendaA: 8.30, tiendaB: 8.00, tiendaC: 8.10, disponible: false },
  { nombre: "DICLOFENACO", tiendaA: 6.20, tiendaB: 6.50, tiendaC: 6.00, disponible: true },
  { nombre: "LORATADINA", tiendaA: 4.50, tiendaB: 4.70, tiendaC: 4.40, disponible: true },
  { nombre: "CETRIZINA", tiendaA: 4.00, tiendaB: 4.10, tiendaC: 3.90, disponible: true },
  { nombre: "AZITROMICINA", tiendaA: 12.00, tiendaB: 11.50, tiendaC: 12.20, disponible: false },
  { nombre: "CLORFENAMINA", tiendaA: 3.80, tiendaB: 3.70, tiendaC: 3.90, disponible: true },
  { nombre: "ACETAZOLAMIDA", tiendaA: 7.60, tiendaB: 5.80, tiendaC: 6.90, disponible: true },
  { nombre: "ACIDO FOLICO ", tiendaA: 9.30, tiendaB: 5.60, tiendaC: 5.30, disponible: true },
  { nombre: "AGUA DESTILADA", tiendaA: 7.30, tiendaB: 6.60, tiendaC: 5.40, disponible: true },
  { nombre: "ALOPURINOL", tiendaA: 6.90, tiendaB: 5.80, tiendaC: 6.90, disponible: false },
  { nombre: "ADENOSINA", tiendaA: 5.20, tiendaB: 6.00, tiendaC: 8.50, disponible: true },
  { nombre: "AGUA DESTILADA ", tiendaA: 5.10, tiendaB: 8.00, tiendaC: 7.20, disponible: true },
  { nombre: "AMITRIPTILINA", tiendaA: 10.20, tiendaB: 9.20, tiendaC: 9.90, disponible: false },
  { nombre: "AMIODARONA", tiendaA: 5.50, tiendaB: 8.40, tiendaC: 6.70, disponible: true },
  { nombre: "AMLODIPINO", tiendaA: 8.50, tiendaB: 8.90, tiendaC: 9.10, disponible: false },
  { nombre: "BACLOFENO", tiendaA: 6.20, tiendaB: 6.50, tiendaC: 6.00, disponible: true },
  { nombre: "BIPERIDENO", tiendaA: 4.50, tiendaB: 4.70, tiendaC: 4.40, disponible: true },
  { nombre: "CETRIZINA", tiendaA: 4.50, tiendaB: 4.10, tiendaC: 3.90, disponible: true },
  { nombre: "BUDESONIDA", tiendaA: 10.00, tiendaB: 11.50, tiendaC: 12.20, disponible: false },
  { nombre: "CARBAMAZEPINA", tiendaA: 2.80, tiendaB: 3.70, tiendaC: 3.90, disponible: true },
  { nombre: "CARBIDOPA", tiendaA: 6.60, tiendaB: 5.80, tiendaC: 6.90, disponible: true },
  { nombre: "DIGOXINA", tiendaA: 6.30, tiendaB: 5.60, tiendaC: 5.30, disponible: true },
  { nombre: "DEXTROSA", tiendaA: 9.30, tiendaB: 10.60, tiendaC: 11.40, disponible: true },
  { nombre: "DASATINIB ", tiendaA: 5.90, tiendaB: 5.80, tiendaC: 4.90, disponible: false },
   { nombre: "METILDOPA", tiendaA: 6.20, tiendaB: 7.00, tiendaC: 10.50, disponible: false },
  { nombre: "METILFENIDATO CLORHIDRATO", tiendaA: 15.10, tiendaB: 16.00, tiendaC: 18.20, disponible: true },
  { nombre: "METRONIDAZOL", tiendaA: 11.00, tiendaB: 15.80, tiendaC: 13.50, disponible: false },
  { nombre: "MITOXANTRONA", tiendaA: 10.50, tiendaB: 13.40, tiendaC: 17.60, disponible: true },
  { nombre: "MORFINA", tiendaA: 6.30, tiendaB: 7.00, tiendaC: 9.20, disponible: false },
  { nombre: "MUPIROCINA ", tiendaA: 2.20, tiendaB: 2.50, tiendaC: 4.00, disponible: true },
  { nombre: "NAPROXENO", tiendaA: 3.50, tiendaB: 4.70, tiendaC: 4.40, disponible: false },
  { nombre: "NIMODIPINO", tiendaA: 4.00, tiendaB: 4.10, tiendaC: 3.90, disponible: false },
  { nombre: "OXACILINA", tiendaA: 18.00, tiendaB: 19.50, tiendaC: 19.90, disponible: false },
  { nombre: "PERMETRINA", tiendaA: 20.80, tiendaB: 21.70, tiendaC: 23.90, disponible: true },
  { nombre: "SERTRALINA", tiendaA: 10.60, tiendaB: 15.80, tiendaC: 16.90, disponible: true },
  { nombre: "", tiendaA: 9.30, tiendaB: 5.60, tiendaC: 5.30, disponible: true },
  { nombre: "RISPERIDONA", tiendaA: 10.30, tiendaB: 16.60, tiendaC: 15.40, disponible: true },
  { nombre: "TIAMAZOL", tiendaA: 26.90, tiendaB: 25.80, tiendaC: 29.90, disponible: false },
  { nombre: "TIOGUANINA", tiendaA: 35.20, tiendaB: 36.00, tiendaC: 38.50, disponible: true },
  { nombre: " YODO POVIDONA", tiendaA: 20.10, tiendaB: 8.00, tiendaC: 7.20, disponible: true },
  { nombre: "WARFARINA SODICA", tiendaA: 10.20, tiendaB: 9.20, tiendaC: 9.90, disponible: false },
  { nombre: "VORICONAZOL", tiendaA: 20.50, tiendaB: 28.40, tiendaC: 26.70, disponible: true },
  { nombre: "TRAMADOL CLORHIDRATO", tiendaA: 40.50, tiendaB: 30.90, tiendaC: 39.10, disponible: false },
  { nombre: "NIMODIPINO", tiendaA: 46.20, tiendaB: 46.50, tiendaC: 36.00, disponible: false },
  { nombre: "MORFINA", tiendaA: 43.50, tiendaB: 49.70, tiendaC: 34.40, disponible: true },
  { nombre: "LEVOTIROXINA SODICA", tiendaA: 50.50, tiendaB: 54.10, tiendaC: 53.90, disponible: true },
  { nombre: "KETAMINA", tiendaA: 10.00, tiendaB: 11.50, tiendaC: 12.20, disponible: false },
  { nombre: "HIDROXICARBAMIDA", tiendaA: 55.80, tiendaB: 53.70, tiendaC: 53.90, disponible: false },
  { nombre: "GENTAMICINA", tiendaA: 65.60, tiendaB: 55.80, tiendaC: 65.90, disponible: true },
  { nombre: "FLUMAZENIL", tiendaA: 63.30, tiendaB: 65.60, tiendaC: 65.30, disponible: true },
  { nombre: "CEFTAZIDIMA", tiendaA: 29.30, tiendaB: 30.60, tiendaC: 28.40, disponible: false },
  { nombre: "TRETINOINA", tiendaA: 25.90, tiendaB: 35.80, tiendaC: 24.90, disponible: false },
  {nombre: "DEFERASIROX", tiendaA:66.36, tiendaB:67.20, tiendaC:75.80, disponible: true},
{nombre: "DESMOPRECINA ACETATO", tiendaA:85.20, tiendaB:75.60, tiendaC:80.80, disponible: true},
{nombre: "DEXAMETASONA", tiendaA:47.30,tiendaB:39.20, tiendaC:59.80, disponible: true},
{nombre: "DEXTROSA", tiendaA:20.10, tiendaB:22.89, tiendaC:25.64, disponible: true},
{nombre: "DICLOXALICINA", tiendaA:78.23, tiendaB:79.65, tiendaC:73.27, disponible: true},
{nombre: "DIGOXINA", tiendaA:55.30, tiendaB:56.20, tiendaC:55.80, disponible: true},
{nombre: "DIMENHIDRINATO", tiendaA:22.39, tiendaB:26.20, tiendaC:27.08, disponible: true},
{nombre: "DINITRATO DE ISOSORBIDA", tiendaA:87.23, tiendaB:90.29, tiendaC:95.90, disponible: false},
{nombre: "DOBUTAMINA", tiendaA:30.14, tiendaB:36.89, tiendaC:35.80, disponible: true},
{nombre: "DOPAMINA CLORHIDRATO", tiendaA:55.00, tiendaB:65.20, tiendaC:59.30, disponible: true},
{nombre: "ENOXAPARINA SODICA", tiendaA:80.11, tiendaB:85.25, tiendaC:86.90, disponible: true},
{nombre: "EPINEFRINA", tiendaA:20.36, tiendaB:28.39, tiendaC:29.50, disponible: true},
{nombre: "EPOETINA ALFA", tiendaA:55.60, tiendaB:54.98, tiendaC:60.56, disponible: false},
{nombre: "ETOPOSIDO", tiendaA:69.10, tiendaB:68.25, tiendaC:59.80, disponible: true},
{nombre: "FENTANILO", tiendaA:10.25, tiendaB:11.25, tiendaC:14.58, disponible: true},
{nombre: "FERROSO SULFATO", tiendaA:23.41, tiendaB:22.89, tiendaC:26.98, disponible: true},
{nombre: "FITOMENADIONA", tiendaA:89.50, tiendaB:90.36, tiendaC:89.99, disponible: true},
{nombre: "FLUDARABINA FOSFATO ", tiendaA:55.60, tiendaB:54.25, tiendaC:53.69, disponible: true},
{nombre: "METILDOPA", tiendaA:100.01, tiendaB:110.22, tiendaC:115.80, disponible: true},
{nombre: "METFORMINA CLORHIDRATO", tiendaA:69.14, tiendaB:68.20, tiendaC:65.80, disponible: true},
{nombre: "METILFENIDATO CLORHIDRATO", tiendaA:33.55, tiendaB:36.40, tiendaC:35.80, disponible: true},
{nombre: "METOTREXATO", tiendaA:53.30, tiendaB:56.20, tiendaC:55.80, disponible: true},
{nombre: "METRONIDAZOL", tiendaA:89.30, tiendaB:96.20, tiendaC:95.20, disponible: true},
{nombre: "MICOFENOLATO MOFETILO", tiendaA:40.20, tiendaB:46.80, tiendaC:50.80, disponible: true},
{nombre: "MIDAZOLAM ", tiendaA:59.30, tiendaB:66.50, tiendaC:35.70, disponible: true},
{nombre: "MORFINA (CLORHIDRATO)", tiendaA:50.30, tiendaB:58.23, tiendaC:52.50, disponible: true},
{nombre: "MUPIROCINA ", tiendaA:70.56, tiendaB:69.45, tiendaC:65.70, disponible: true},
{nombre: "NAPROXENO ", tiendaA:36.22, tiendaB:36.20, tiendaC:35.80, disponible: true},
{nombre: "NIFEDIPINO ", tiendaA:78.20, tiendaB:75.99, tiendaC:77.32, disponible: true},
{nombre: "NITROFURANTOINA", tiendaA:55.69, tiendaB:52.30, tiendaC:51.29, disponible: true},
{nombre: "NOREPINEFRINA", tiendaA:22.30, tiendaB:26.36, tiendaC:28.00, disponible: false},
{nombre: "OMEPRAZOL", tiendaA:48.28, tiendaB:47.32, tiendaC:45.55, disponible: true},
{nombre: "ONDANSETRON", tiendaA:25.20, tiendaB:26.20, tiendaC:25.80, disponible: true},
{nombre: "OXACILINA ", tiendaA:45.20, tiendaB:43.50, tiendaC:44.25, disponible: true},
{nombre: "OXIGENO MEDICINAL", tiendaA:5.30, tiendaB:6.20, tiendaC:5.80, disponible: false},
{nombre: "PARACETAMOL", tiendaA:58.30, tiendaB:65.20, tiendaC:55.80, disponible: true},
{nombre: "PERMETRINA", tiendaA:53.30, tiendaB:62.20, tiendaC:65.20, disponible: true},
{nombre: "PIRIDOXINA CLORHIDRATO ", tiendaA:22.36, tiendaB:20.30, tiendaC:30.95, disponible: true},
{nombre: "POTASIO CITRATO ", tiendaA:50.23, tiendaB:56.20, tiendaC:55.80, disponible: true},
{nombre: "PREDNISONA", tiendaA:100.23, tiendaB:95.63, tiendaC:99.84, disponible: true},
{nombre: "PROPRANOLOL CLORHIDRATO", tiendaA:65.30, tiendaB:66.20, tiendaC:65.80, disponible: true},
{nombre: "PROTAMINA SULFATO 1", tiendaA:85.30, tiendaB:86.20, tiendaC:85.80, disponible: true},
{nombre: "RANITIDINA", tiendaA:55.20, tiendaB:30.04, tiendaC:33.25, disponible: true},
{nombre: "RISPERIDONA", tiendaA:35.30, tiendaB:36.20, tiendaC:35.80, disponible: true},
{nombre: "SALBUTAMOL", tiendaA:70.30, tiendaB:76.40, tiendaC:75.86, disponible: true},
{nombre: "SALES DE REHIDRATACION ORAL", tiendaA:55.30, tiendaB:65.20, tiendaC:59.50, disponible: false},
{nombre: "SODIO BICARBONATO", tiendaA:5.30, tiendaB:6.20, tiendaC:5.80, disponible: true},
{nombre: "SODIO CLORURO", tiendaA:25.30, tiendaB:26.20, tiendaC:25.80, disponible: true},
{nombre: "CICLOSPORINA", tiendaA: 10.30, tiendaB:11.20, tiendaC:12.80, disponible: true},
];

const medList = document.getElementById("medList");
const searchInput = document.getElementById("searchInput");
const countDisplay = document.getElementById("count");

function mostrarMedicamentos(lista) {
  medList.innerHTML = "";
  lista.forEach(med => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${med.nombre}</td>
      <td>${med.tiendaA.toFixed(2)}</td>
      <td>${med.tiendaB.toFixed(2)}</td>
      <td>${med.tiendaC.toFixed(2)}</td>
      <td class="${med.disponible ? "available" : "unavailable"}">
        ${med.disponible ? "En Stock" : "Sin Stock"}
      </td>
    `;

    medList.appendChild(fila);
  });

  countDisplay.textContent = "Medicamentos encontrados: " + lista.length;
}

function filtrarMedicamentos() {
  const texto = searchInput.value.toLowerCase();
  const filtrados = medicamentos.filter(med => med.nombre.toLowerCase().includes(texto));
  mostrarMedicamentos(filtrados);
}

searchInput.addEventListener("input", filtrarMedicamentos);

// Mostrar todos al inicio
mostrarMedicamentos(medicamentos);
