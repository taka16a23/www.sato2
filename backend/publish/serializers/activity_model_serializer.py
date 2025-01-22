#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""activity_model_serializer --

"""
from rest_framework import serializers

from publish.models.activity_model import ActivityModel


class ActivityModelSerializer(serializers.ModelSerializer):
    """ActivityModelSerializer

    ActivityModelSerializer is a serializers.ModelSerializer.
    Responsibility:
    """
    class Meta:
        model = ActivityModel
        fields = (
            'id',
            'title',
            'image',
            'body',
            'excerpt',
            'news',
            'publish_date',
            'expiry_date',
        )



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# activity_model_serializer.py ends here
