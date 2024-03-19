from django.urls import path
from .views import problem1
from .views import problem2

urlpatterns = [ 
    path('problem1/', problem1, name='problem1'),
    path('problem2/', problem2, name='problem2')
]
 