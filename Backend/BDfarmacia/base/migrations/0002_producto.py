# Generated by Django 4.1.3 on 2022-12-05 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20)),
                ('codigo_barra', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=100)),
                ('precio', models.CharField(max_length=9)),
                ('imagen', models.ImageField(upload_to='base/media')),
            ],
        ),
    ]
