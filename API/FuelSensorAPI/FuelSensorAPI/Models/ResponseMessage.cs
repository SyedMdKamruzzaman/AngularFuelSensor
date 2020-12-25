using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuelSensorAPI.Models
{
    public class ResponseMessage
    {
        public object ResponseObj { get; set; }
        public string Message { get; set; }
        public int StatusCode { get; set; }
        
    }
}
