using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("login")]
    public class LoginController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]PasswordObject passwordObject)
        {
            if (ModelState.IsValid && passwordObject.password == "123123")
            {
                return Ok(new TokenObject("1kj32gasfk123lkxc123"));
            }

            return BadRequest(ModelState);
        }
    }
}
