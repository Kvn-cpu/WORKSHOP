export const postData = async (url, data) => {
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert("Elemento creado");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  