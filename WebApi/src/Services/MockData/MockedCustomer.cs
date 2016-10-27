using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.MockData
{
    public static class MockedCustomer
    {
        private static List<CustomerModel> _customerList;

        static MockedCustomer()
        {
            _customerList = new List<CustomerModel>
            {
                new CustomerModel()
                {
                    Address = "Address 1",
                    Id = 1,
                    Name = "Customer 1",
                    Province = 1
                },
                new CustomerModel()
                {
                    Address = "Address 2",
                    Id = 2,
                    Name = "Customer 2",
                    Province = 2
                },
                new CustomerModel()
                {
                    Address = "Address 3",
                    Id = 3,
                    Name = "Customer 3",
                    Province = 3
                }
            };
        }

        public static List<CustomerModel> GetMockData()
        {
            return _customerList;
        }
    }
}
