using FuelSensorAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FuelSensorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]    
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] RequestMessage requestObject)
        {
            User user = new User();
            string jsonResponse =Convert.ToString(requestObject.RequestObject);
            user = JsonConvert.DeserializeObject<User>(jsonResponse);
            if (user == null)
                return BadRequest("Invalid client request");
            if (user.userID=="jewel" && user.Password=="zaman")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:55584",
                    audience: "http://localhost:55584",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signingCredentials
                    );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                ResponseMessage responseMessage = new ResponseMessage();
                responseMessage.StatusCode = 1;
                responseMessage.Message = "Login Successfully";
                responseMessage.ResponseObj = tokenString;

                return  Ok(responseMessage);

            }

            return Unauthorized();
        }
    }
}
