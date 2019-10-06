using System;

namespace WebApplication1.Models
{
    public class Book
    {
        public String name { get; set; }
        public String author { get; set; }
        public Int32 pagesAmount { get; set; }

        public Book(String name, String author, Int32 pagesAmount)
        {
            this.name = name;
            this.author = author;
            this.pagesAmount = pagesAmount;
        }
    }
}
