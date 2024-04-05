namespace HundeProjekt.Models
{
    public class Ruleset
    {
        public int RulesetID { get; set; }
        public int RulesetClass { get; set; }
        public int NumberOfExercises { get; set; }
        public int NumberOfBeginner { get; set; }
        public int NumberOfIntermediate { get; set; }
        public int NumberOfExpert { get; set; }
        public int NumberOfChampion { get; set; }
        public int NumberOfConeExercises { get; set; }
        public int NumberOfStationary { get; set; }
        public int NumberOfRightActs { get; set; }
        public int NumberOfReverseExercises { get; set; }
        public int NumberOfJumpExercises { get; set; }
        public int NumberOfSingleJumpExercises { get; set; }
        public int NumberOfDoubleJumpExercises { get; set; }

        //Navigationproperties
        ICollection<Course> Courses { get; set; }
    }
}
