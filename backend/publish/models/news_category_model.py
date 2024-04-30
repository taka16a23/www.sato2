#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""お知らせカテゴリーモデル --

"""
from django.db import models
from colorfield.fields import ColorField


class NewsCategoryModel(models.Model):
    """NewsCategoryModel

    NewsCategoryModel is a models.Model.
    Responsibility:
    """
    # カテゴリー名
    name = models.CharField(
        'カテゴリー名',
        max_length=8,
        help_text=u'8文字以内',
        unique=True,
        null=False,
        blank=False,
    )
    # 文字色
    fgcolor = ColorField(
        '文字色',
        default='#ffffff',
    )
    # 背景色
    bgcolor = ColorField(
        '背景色',
        default='#ff0000',
    )
    # 並び順
    sortid = models.IntegerField(
        '並び順',
        help_text=u'サイトで昇順に並びます',
        default=0,
        blank=False,
        null=False,
        db_index=True,
    )

    class Meta:
        verbose_name = 'お知らせカテゴリー'
        verbose_name_plural = 'お知らせカテゴリー'
        ordering = ['sortid', ]

    def __str__(self):
        return self.name



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# news_category_model.py ends here
