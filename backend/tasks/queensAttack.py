def queensAttack(n, k, r_q, c_q, obstacles):
    target_squares = 0
    all_obstacles = set((r, c) for r, c in obstacles)
    
    movements = [
        (0, -1),
        (1, -1),
        (1, 0),
        (1, 1),
        (0, 1),
        (-1, 1),
        (-1, 0),
        (-1, -1)
    ]
    # Iterate over the movements
    for dx, dy in movements:
        r, c = r_q + dx, c_q + dy
        # Move in the current direction until reaching limit or obstavle
        while (1 <= r <= n) and (1 <= c <= n):
            if (r, c) in all_obstacles:
                break        
            target_squares += 1
            r += dx
            c += dy
    
    return target_squares