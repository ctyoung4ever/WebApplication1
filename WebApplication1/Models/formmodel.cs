using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_collin.Models
{
    public class formmodel
    {
        [Required]
        [Range( 0, 100)]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int groupProject { get; set; }

        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int midtermExam { get; set; }

        [Required]
        [Range(0, 100)]
        public int finalExam { get; set; }

        [Required]
        [Range(0, 100)]
        public int intex { get; set; }

    }
}
