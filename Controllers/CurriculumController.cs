using Microsoft.AspNetCore.Mvc;

namespace A2_MVC.Controllers
{
    public class CurriculumController : Controller
    {
        public IActionResult Luigi()
         {
           return Luigi();
        }
        public IActionResult Vito()
        {
            return View();
        }
    }
}
