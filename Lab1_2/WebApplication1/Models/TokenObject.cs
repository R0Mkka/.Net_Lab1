using System;

namespace WebApplication1.Models
{
    public class TokenObject
    {
        public String token { get; set; }

        public TokenObject(String token)
        {
            this.token = token;
        }
    }
}
