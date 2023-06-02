const dashboardData = {
    weekVisitor: 234000,
    totalSale: 6574,
    totalOrder: 4363,
    totalSaleInYear: 65000,
    tableData: [
      { no: 1, product: 'Product A', orderDate: '2022-05-01', status: 'Delivered' },
      { no: 2, product: 'Product B', orderDate: '2023-02-20', status: 'Delivered' },
      { no: 3, product: 'Product C', orderDate: '2023-05-25', status: 'Processing' },
      { no: 4, product: 'Product D', orderDate: '2023-05-28', status: 'Shipped' },
      { no: 3, product: 'Product C', orderDate: '2023-05-29', status: 'Shipped' },
      // Add more data as needed
    ],
  };
  
  export default function handler(req, res) {
    // Handle GET request
    if (req.method === 'GET') {
      res.status(200).json(dashboardData);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }