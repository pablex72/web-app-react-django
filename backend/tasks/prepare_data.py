def prepare_data(request):
# Access the request body and extract the text string from the 'input' field
    input_text = request.data.get('input', '')
    lines = input_text.strip().split('\n')    
    n, k = map(int, lines[0].split())
    r_q, c_q = map(int, lines[1].split())
    obstacles = [list(map(int, obstacle.split())) for obstacle in lines[2:]]
    data = {
        "n": n,
        "k": k,
        "r_q": r_q,
        "c_q": c_q,
        "obstacles": obstacles
    }

    return data
