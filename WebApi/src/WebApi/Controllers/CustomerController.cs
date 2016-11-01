using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.Services;
using Services.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private CustomerService _service = new CustomerService();

        // GET api/values
        [HttpGet]
        public IEnumerable<CustomerModel> Get()
        {
            return _service.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public CustomerModel Get(int id)
        {
            return _service.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] CustomerModel model)
        {
            _service.Create(model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id,[FromBody] CustomerModel model)
        {
            model.Id = id;
            _service.Edit(model);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }
    }
}
