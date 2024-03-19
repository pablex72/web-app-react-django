from django.test import TestCase
from .queensAttack import queensAttack
from .stringValue import maxValue

class QueensAttackTestCase(TestCase):
    def test_queens_attack_no_obstacles(self):
        # Test the queensAttack function when there are no obstacles
        n = 8  
        k = 0  
        r_q, c_q = 4, 4  
        obstacles = [] 
        expected_result = 27
        self.assertEqual(queensAttack(n, k, r_q, c_q, obstacles), expected_result)

    def test_queens_attack_with_obstacles(self):
        # Test the queensAttack function with obstacles
        n = 8
        k = 3
        r_q, c_q = 4, 4 
        obstacles = [(5, 4), (3, 4), (4, 6)] 
        expected_result = 17
        self.assertEqual(queensAttack(n, k, r_q, c_q, obstacles), expected_result)

class MaxValueTestCase(TestCase):
    def test_max_value_empty_string(self):
        # Test max value for an empty string
        s = "abcabcddd"
        expected_result = 9
        self.assertEqual(maxValue(s), expected_result)

    def test_max_value_single_character(self):
        # Test max value for a string with a single character
        s = "aaaaaa"
        expected_result = 12
        self.assertEqual(maxValue(s), expected_result)
