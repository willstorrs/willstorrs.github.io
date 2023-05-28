fetch('companies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    const dataList = document.getElementById('companies');
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.company + " (" + item.ticker + ")";
      dataList.appendChild(option);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
