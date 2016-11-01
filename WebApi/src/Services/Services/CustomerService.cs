using Services.MockData;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Services
{
    public class CustomerService
    {
        public CustomerModel[] Get()
        {
            return MockedCustomer.GetMockData().ToArray();
        }

        public CustomerModel Get(int id)
        {
            return MockedCustomer.GetMockData()
                .FirstOrDefault(c => c.Id == id);
        }

        public void Create(CustomerModel model)
        {
            var customer = MockedCustomer.GetMockData()
                .OrderBy(c => c.Id)
                .LastOrDefault();

            model.Id = customer.Id + 1;

            MockedCustomer.GetMockData().Add(model);
        }

        public void Edit(CustomerModel model)
        {
            var query = MockedCustomer.GetMockData().FirstOrDefault(c => c.Id == model.Id);

           MockedCustomer.GetMockData().Remove(query);

           MockedCustomer.GetMockData().Add(model);

        }

        public void Delete(int id)
        {
            var query = MockedCustomer.GetMockData().FirstOrDefault(c => c.Id == id);

            MockedCustomer.GetMockData().Remove(query);
        }
    }
}
