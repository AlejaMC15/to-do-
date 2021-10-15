export const getSentence = () => {
    fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => data);
};