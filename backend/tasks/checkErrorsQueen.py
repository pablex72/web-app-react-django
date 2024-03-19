from rest_framework.exceptions import ValidationError

def checkErrorsQueen(data):
    print("Type of data:", type(data))

    # Check if the number of obstacles matches 'k'
    if len(data['obstacles']) != data['k']:
        raise ValidationError("The number of obstacles should match the value of 'k'")

    # Check that n, r_q, c_q are in the range from 1 to 10^5
    if not (1 <= data['n'] <= 10**5) or not (1 <= data['r_q'] <= data['n']) or not (1 <= data['c_q'] <= data['n']):
        raise ValidationError("The values of n, r_q, c_q should be in the range from 1 to 10^5")

    # Check that obstacles are in the range from 1 to 10^5 and less than or equal to 'n'
    if any(x < 1 or x > 10**5 or x > data['n'] for row in data['obstacles'] for x in row):
        raise ValidationError("The values of obstacles should be in the range from 1 to 10^5 and less than or equal to 'n'")

    # Check that k is in the range from 0 to 10^5
    if not (0 <= data['k'] <= 10**5):
        raise ValidationError("The value of k should be in the range from 0 to 10^5")

    # There will never be an obstacle at the position where the queen is located.
    queen_position = [data['r_q'], data['c_q']]
    if queen_position in data['obstacles']:
        raise ValidationError("There will never be an obstacle at the position where the queen is located.")

    return True
