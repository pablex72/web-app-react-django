def maxValue(string):
    # Function to construct the suffix array of the string
    def construct_suffix_array(string):
        length = len(string)
        step = 1
        sequence = to_unique_int_keys(string)
        
        while max(sequence) < length - 1:
            new_sequence = []
            index = 0
            while index < len(sequence):
                current = sequence[index]
                next_val = sequence[index + step] if index + step < len(sequence) else -1
                new_sequence.append((current, next_val))
                index += 1
            # Convert the tuple to unique integer keys
            sequence = to_unique_int_keys([(current * (length + 1)) + next_val + 1 for current, next_val in new_sequence])
            step <<= 1
        return sequence

    # Function to invert the array
    def inverse_array(array):
        length = len(array)
        result = [0] * length
        for i in range(length):
            result[array[i]] = i
        return result

    # Function to assign unique integer keys to elements in the array
    def to_unique_int_keys(array):
        seen = set()
        unique_array = []
        for element in array:
            if element not in seen:
                unique_array.append(element)
                seen.add(element)
        unique_array.sort()
        index_map = {value: index for index, value in enumerate(unique_array)}
        return [index_map[value] for value in array]

    # Function to construct the suffix matrix of the string
    def construct_suffix_matrix(string):
        length = len(string)
        step = 1
        sequence = to_unique_int_keys(string)
        result = [sequence]

        while max(sequence) < length - 1:
            new_sequence = []
            index = 0
            while index < len(sequence):
                current = sequence[index]
                next_val = sequence[index + step] if index + step < len(sequence) else -1
                new_sequence.append((current, next_val))
                index += 1
            # Convert the tuple to unique integer keys
            sequence = to_unique_int_keys([(current * (length + 1)) + next_val + 1 for current, next_val in new_sequence])
            result.append(sequence)
            step <<= 1
        return result

    # Function to find the longest common prefix between two suffixes
    def longest_common_prefix(suffix_matrix, i, j):
        length = len(suffix_matrix[-1])
        if i == j:
            return length - i
        step = 1 << (len(suffix_matrix) - 2)
        lcp = 0
        for line in suffix_matrix[-2::-1]:
            if i >= length or j >= length:
                break
            if line[i] == line[j]:
                lcp ^= step
                i += step
                j += step
            step >>= 1
        return lcp

    # Calculate the suffix array and suffix matrix
    suffix_array = inverse_array(construct_suffix_array(string))
    suffix_matrix = construct_suffix_matrix(string)

    # Calculate the array of longest common prefixes
    lcp_array = []
    for index in range(len(suffix_array) - 1):
        lcp_array.append(longest_common_prefix(suffix_matrix, suffix_array[index], suffix_array[index+1]))
    lcp_array.append(0)

    max_score = len(string)

    lcp_array_length = len(lcp_array)

    # Iterate through the suffix array to find the maximum repeated substring score
    for i, suffix_index in enumerate(suffix_array):
        if lcp_array[i] <= 1:
            continue

        current_lcp = lcp_array[i]

        count = 2
        # Count substrings with common prefixes
        for next_index in range(i+1, lcp_array_length):
            if lcp_array[next_index] >= current_lcp:
                count += 1
            else:
                break
        for prev_index in range(i-1, -1, -1):
            if lcp_array[prev_index] >= current_lcp:
                count += 1
            else:
                break

        # Updating the maximum score
        max_score = max(count * current_lcp, max_score)

    return max_score
