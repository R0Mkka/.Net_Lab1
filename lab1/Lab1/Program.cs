using System;
using System.Collections;

namespace Lab1
{
    class Program
    {
        static void Main(String[] _)
        {
            ArrayList pairs = new ArrayList();

            while (true)
            {
                Console.Clear();
                Console.WriteLine("Введите два чесла через запятую (без пробелов):");

                string userInput = InputController.handleStringInput();

                if (userInput == "exit")
                {
                    break;
                }

                if (Helper.Check(userInput))
                {
                    String[] parts = userInput.Split(',');
                    String[] pair = new String[2] { parts[0], parts[1] };

                    pairs.Add(pair);
                }
                else
                {
                    Console.WriteLine("Ошибка ввода. Данные не добавлены.");
                    Console.WriteLine("Для продолжения нажмите любую клавишу.");
                    Console.ReadKey();
                }
            }

            PrintResult(pairs);
        }
        
        private static void PrintResult(ArrayList pairs)
        {
            Console.WriteLine("Результат: ");

            foreach (String[] item in pairs)
            {
                Console.WriteLine("X: {0}, Y: {1}", item[0], item[1]);
            }
        }
    }
}
