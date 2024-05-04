#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""news_model_viewset --

"""
from rest_framework import viewsets
from rest_framework.permissions import AllowAny


from publish.models.news_model import NewsModel
from publish.serializers.news_model_serializer import NewsModelSerializer


class NewsModelViewset(viewsets.ModelViewSet):
    """NewsModelViewset

    NewsModelViewset is a viewsets.ModelViewSet.
    Responsibility:
    """
    permission_classes = [
        AllowAny
    ]
    http_method_names = ['get', ]
    queryset = NewsModel.objects.filter()
    serializer_class = NewsModelSerializer



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# news_model_viewset.py ends here
