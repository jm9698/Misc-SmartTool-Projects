import { fetchImportData } from './github.js';

const displayImportInfo = async () => {
    const importData = await fetchImportData();
    const importInfoDiv = document.getElementById('import-info');
    importInfoDiv.innerHTML = importData.map(import => `<p>${import.title}</p>`).join('');
};

displayImportInfo();
