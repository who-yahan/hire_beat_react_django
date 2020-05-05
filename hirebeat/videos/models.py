from django.db import models
from django.contrib.auth.models import User
from questions.models import Question

class Video(models.Model):
    # id is auto created
    url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="videos", on_delete = models.CASCADE, null = True)
    title = models.CharField(default="My video", max_length=200)
    # review related
    is_reviewed = models.BooleanField(default=False)
    tags = models.TextField(default="Good job")
    comments = models.TextField(default="No comments yet")
    score = models.FloatField(default=5.0)
    reviewer = models.ForeignKey(User, related_name="reviewed_videos", on_delete= models.DO_NOTHING, null=True)
    # More fields to add
