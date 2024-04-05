namespace HundeProjekt.Models
{
    public class Exercise
    {
        // Declaration of public properties
        public int ExerciseID {  get; set; }
        public string Description { get; set; }
        public MovementEnum MovementEnumID { get; set; }
        public bool Sideshift { get; set; }
        public string IllustrationPath { get; set; }
        public ClassEnum ClassEnumID { get; set; }
        public int SignNumber { get; set; }
        public double PositionX { get; set; }
        public double PositionY { get; set; }

     
    }
}
