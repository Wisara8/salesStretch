var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addTotalSales(sales) {
  var result = 0;
  for (var i = 0; i < sales.length; i++) {
    result += sales[i];
  }
  return result;
}

function addTotalTaxes(total, province) {
  return total * salesTaxRates[province];
}

function calculateSalesTax(salesData, taxRates) {

  var result = {};

  for (var i = 0; i < salesData.length; i++) {

    var companyName = salesData[i].name;
    var totalSales = addTotalSales(salesData[i].sales);
    var totalTaxes = addTotalTaxes(totalSales,salesData[i].province);

    var newObj = {
      totalSales: totalSales,
      totalTaxes: totalTaxes
    }

    if (!result[companyName]) {
      result[companyName] = newObj;
    }
    else {
      result[companyName].totalSales += totalSales;
      result[companyName].totalTaxes += totalTaxes;
    }

  }

  console.log(result);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
