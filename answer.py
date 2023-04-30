def title_case(title, minor_words=''):
    title_arr=title.lower().split()
    minor_arr=minor_words.lower().split()
    result_arr=[]
    if title!='':
        for i in range(len(title_arr)):
            if title_arr[i] not in minor_arr or i==0:
                result_arr.append(title_arr[i][0].upper()+title_arr[i][1:])
            else:
                result_arr.append(title_arr[i])
        return ' '.join(result_arr)
    else:
        return ''
