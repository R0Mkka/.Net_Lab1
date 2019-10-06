using System;
using System.Collections;
using System.IO;
using System.Text;

namespace Lab1_1
{
    class Program
    {
        static void Main(String[] _)
        {
            ArrayList pairs = new ArrayList();
            FileInfo fInfo = new FileInfo("./pairs.txt");

            if (fInfo.Exists)
            {
                using (FileStream fStream = new FileStream("./pairs.txt", FileMode.OpenOrCreate))
                {
                    Byte[] array = new Byte[fStream.Length];

                    fStream.Read(array, 0, array.Length);

                    String textFromFile = Encoding.Default.GetString(array);

                    String[] lines = textFromFile.Split('\n');

                    foreach (var singleLine in lines)
                    {
                        if (Helper.Check(singleLine))
                        {
                            String[] parts = singleLine.Split(',');

                            pairs.Add(parts);
                        }
                    }
                }
            }

            PrintResult(pairs);

            Console.ReadKey();
        }

        private static void PrintResult(ArrayList pairs)
        {
            Console.WriteLine("Результат: ");

            foreach (String[] pair in pairs) {
                Console.WriteLine("X: {0}, Y: {1}", pair[0], pair[1]);
            }
        }
    }
}
