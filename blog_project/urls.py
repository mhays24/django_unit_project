from django.contrib import admin
from django.urls import path
from blog_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.post_list, name='post_list'),
    path('post/new/', views.post_new, name='post_new'),
    path('post/<int:pk>/delete/', views.post_delete, name='post_delete'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),

]