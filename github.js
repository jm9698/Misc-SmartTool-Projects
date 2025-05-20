export const fetchImportData = async () => {
    const response = await fetch('https://api.github.com/repos/OWNER/REPO/pulls?state=closed');
    const data = await response.json();
    return data.filter(pr => pr.imported_at).map(pr => ({
        title: pr.title,
        importdAt: pr.imported_at
    }));
};
