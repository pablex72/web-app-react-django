from rest_framework.decorators import api_view
from rest_framework.response import Response
from .prepare_data import prepare_data
from .queensAttack import queensAttack
#from .stringValueSimp import maxValue;
from .stringValue import maxValue;
from .checkErrorsQueen import checkErrorsQueen
from rest_framework.exceptions import ValidationError
from .checkErrorsSubstring import checkErrorsSubstring 
@api_view(['POST'])
def problem1(request):
    if request.method == 'POST':
        prepared_data = prepare_data(request)
        try:            
            checkErrorsQueen(prepared_data) # Check input errors
            squares_attacked = queensAttack(**prepared_data)
            return Response({'problem1': squares_attacked})
        except ValidationError as e:
            return Response({'error': str(e)}, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)
    
@api_view(['POST'])
def problem2(request):
    if request.method == 'POST':
       prepared_data_substring = request.data.get('input', '')
       try:
           checkErrorsSubstring(prepared_data_substring)
           maxFunc = maxValue(prepared_data_substring)
           return Response({'problem2': maxFunc})
       except ValidationError as e:
           return Response({'error': str(e)}, status=400)       
    else:
        return Response({'error': 'Method not allowed'}, status=405)        