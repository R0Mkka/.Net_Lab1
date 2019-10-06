using System;
using System.Globalization;

namespace Lab1
{
    class Helper
    {
        public static Boolean Check(string userInput)
        {
            Boolean hasComma = CheckHasComma(userInput);
            Boolean hasTwoParts = CheckHasTwoParts(userInput);

            if (!(hasComma && hasTwoParts))
            {
                return false;
            }

            String[] parts = userInput.Split(',');

            Boolean doubleable = isDouble(parts[0]) && isDouble(parts[1]);

            return doubleable;
        }

        private static Boolean CheckHasComma(String userInput)
        {
            return userInput.IndexOf(',') != -1;
        }

        private static Boolean CheckHasTwoParts(String userInput)
        {
            return userInput.Split(',').Length == 2;
        }

        private static Boolean isDouble(String target)
        {
            Double code;

            return Double.TryParse(
                target.Trim(),
                NumberStyles.Float,
                CultureInfo.InvariantCulture,
                out code
            );
        }
    }
}
