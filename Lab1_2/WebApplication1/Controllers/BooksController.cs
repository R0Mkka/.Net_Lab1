using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("books")]
    public class BooksController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            if (ModelState.IsValid)
            {
                List<Book> books = new List<Book>();

                books.Add(new Book("First", "Author", 123));
                books.Add(new Book("Second", "Roman", 321));
                books.Add(new Book("Third", "Alexanov", 222));

                return Ok(books.ToArray());
            }

            return BadRequest(ModelState);
        }

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
