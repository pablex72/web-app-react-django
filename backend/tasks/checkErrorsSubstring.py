def checkErrorsSubstring(substringValue):
    # Check if substringValue is a string
    if not isinstance(substringValue, str):
        raise ValueError("substringValue must be a string")

    # Check if the length of substringValue is between 1 and 10^5
    if not (1 <= len(substringValue) <= 10**5):
        raise ValueError("The length of substringValue should be between 1 and 10^5")

    # Check if substringValue contains only English letters
    if not all('a' <= char <= 'z' for char in substringValue):
        raise ValueError("substringValue should contain only English letters")

    return True
